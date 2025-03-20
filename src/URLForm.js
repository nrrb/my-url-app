import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Grid, Typography, Link, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function URLForm() {
  const [urlInput, setUrlInput] = useState('');
  const [baseUrl, setBaseUrl] = useState('');
  const [params, setParams] = useState([]);
  const [generatedUrl, setGeneratedUrl] = useState('');

  // Parse the URL and extract query parameters
  const parseUrl = (url) => {
    try {
      const parsedUrl = new URL(url);
      setBaseUrl(parsedUrl.origin + parsedUrl.pathname);
      const searchParams = new URLSearchParams(parsedUrl.search);
      const paramsArray = [];
      for (let [key, value] of searchParams.entries()) {
        paramsArray.push({ key, value });
      }
      setParams(paramsArray);
    } catch (error) {
      // If the URL is invalid, reset the base URL and parameters.
      setBaseUrl('');
      setParams([]);
    }
  };

  // Update the generated URL whenever baseUrl or params change.
  useEffect(() => {
    if (baseUrl) {
      const searchParams = new URLSearchParams();
      params.forEach(({ key, value }) => {
        if (key) searchParams.set(key, value);
      });
      const newUrl = `${baseUrl}?${searchParams.toString()}`;
      setGeneratedUrl(newUrl);
    } else {
      setGeneratedUrl('');
    }
  }, [baseUrl, params]);

  // Handle URL input changes.
  const handleUrlInputChange = (e) => {
    const newUrl = e.target.value;
    setUrlInput(newUrl);
    parseUrl(newUrl);
  };

  // Handle changes in individual parameter fields.
  const handleParamChange = (index, field, value) => {
    const newParams = [...params];
    newParams[index][field] = value;
    setParams(newParams);
  };

  // Add a new empty parameter.
  const addParameter = () => {
    setParams([...params, { key: '', value: '' }]);
  };

  // Remove a parameter row.
  const removeParameter = (index) => {
    const newParams = [...params];
    newParams.splice(index, 1);
    setParams(newParams);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        URL Query Parameter Editor
      </Typography>
      <TextField
        label="Input URL"
        placeholder="Paste your URL here"
        fullWidth
        multiline
        rows={2}
        value={urlInput}
        onChange={handleUrlInputChange}
        variant="outlined"
        sx={{ mb: 1 }}
      />
      <Typography variant="subtitle1" gutterBottom>
        Query Parameters
      </Typography>
      {params.map((param, index) => (
        <Grid container spacing={0.5} key={index} alignItems="center" sx={{ mb: 0.5 }}>
          <Grid item xs={5}>
            <TextField
              label="Parameter Name"
              value={param.key}
              onChange={(e) => handleParamChange(index, 'key', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Parameter Value"
              value={param.value}
              onChange={(e) => handleParamChange(index, 'value', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={() => removeParameter(index)} aria-label="remove parameter" size="small">
              <RemoveIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button variant="contained" startIcon={<AddIcon />} onClick={addParameter} sx={{ mb: 1 }} size="small">
        Add Parameter
      </Button>
      <Typography variant="subtitle1" gutterBottom>
        Generated URL
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={2}
        value={generatedUrl}
        variant="outlined"
        InputProps={{
          readOnly: true,
        }}
        sx={{ mb: 1 }}
        size="small"
      />
      {generatedUrl && (
        <Link href={generatedUrl} target="_blank" rel="noopener" variant="body2">
          Open Generated URL
        </Link>
      )}
    </Container>
  );
}

export default URLForm;
