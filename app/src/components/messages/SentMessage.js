import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const MessageContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const SentMessage = ({ message }) => {
  return (
    <MessageContainer
      sx={{
        padding: 2,
        borderRadius: 2,
        marginBottom: 2,
      }}
    >
      <Typography variant="h3">{message.user}</Typography>
      <Typography variant="h6">{message.thread}</Typography>
      <Typography variant="body1">{message.content}</Typography>
      <Typography variant="body1">{message.reactions}</Typography>
    </MessageContainer>
  );
};

export default SentMessage;