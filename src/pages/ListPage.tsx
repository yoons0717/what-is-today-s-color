import React, {useEffect} from 'react';
import axios from "axios";
import {useMounted} from "hooks/useMounted";

function ListPage() {
  const mounted = useMounted();
  console.log('render')
  const hi = 'hi'

  useEffect(() => {

    if (mounted) {
      axios.get('/api')
      .then(response => {
        if (response) {
          console.log(response.data)
        } else {
          alert("실패 했습니다.")
        }
      })
    }
  }, [mounted])

  return (
      <div>hi</div>
  );
}

export default ListPage;