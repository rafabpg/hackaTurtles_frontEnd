import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize, Chip, Paper } from '@mui/material';

const ModalForm = ({ isOpen, onClose }) => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [summary, setSummary] = useState('');
  const [tags, setTags] = useState('');
  const [tagsList, setTagsList] = useState([]);

  const handleRemoveTag = (index) => {
    const newTagsList = [...tagsList];
    newTagsList.splice(index, 1);
    setTagsList(newTagsList);
  };

  const handleCloseModalBtn = () =>{
    onClose();
  }
  const handleCreateProject = () => {

    console.log('Nome do Projeto:', projectName);
    console.log('Descrição:', description);
    console.log('Resumo:', summary);
    console.log('Tags:', tags);

 
    setProjectName('');
    setDescription('');
    setSummary('');
    setTags('');


    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Criar Projeto</h2>
        <TextField
          fullWidth
          label="Nome do Projeto"
          variant="outlined"
          margin="normal"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <TextareaAutosize
          minRows={3}
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ width: '100%', marginBottom: 2 }}
        />
        <TextareaAutosize
  minRows={3}
  placeholder="Resumo"
  value={summary}
  onChange={(e) => setSummary(e.target.value)}
  sx={{ width: '100%', marginBottom: 2 }}
/>


     <TextField
      fullWidth
      label="Tags"
      variant="outlined"
      margin="normal"
      value={tags}
      onChange={(e) => setTags(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && tags.trim() !== '') {
          setTagsList([...tagsList, tags.trim()]);
          setTags('');
        }
      }}
    />

    {/* <Paper component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, padding: 0 }}>
      {tagsList.map((tag, index) => (
        <li key={index}>
          <Chip
            label={tag}
            onDelete={() => handleRemoveTag(index)}
            color="primary"
            variant="outlined"
          />
        </li>
      ))}
    </Paper>  */}
        <Button variant="contained" color="primary" onClick={handleCreateProject}>
          Criar
        </Button>
        <Button sx={{padding:{left:'24px'}}} variant="contained" color="primary" onClick={handleCloseModalBtn}>
          Cancelar
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalForm;
