import { useState } from 'react';

interface ContentState {
  title?: string;
  description?: string;
}

const initialContentState: ContentState = {
  title: "",
  description: ""
}


export function useDialog() {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(initialContentState);

  function open(title?: ContentState['title'], description?: ContentState['description']) {
    setVisible(true);

    if(title || description) {
      setContent(v => ({
        ...v,
        ...(typeof title !== 'undefined' ? { title }: undefined ),
        ...(typeof description !== 'undefined' ? { description }: undefined)
      }))
    }
  }

  function close() 
{
    setVisible(false);
  }

  return {
    visible,
    open,
    close,
    content
  }
}
