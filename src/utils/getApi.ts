import { useState, useContext, useEffect } from "react";
import { GlobalStateContext } from "../context/GlobalState";

interface apiI {
  data: any;
  error: any;
  loading: boolean;
}

const initialState = {
  data: null,
  error: null,
  loading: true,
};

function useGet(url: string) {
  console.log("useGet called");
  const [state, setState] = useState<apiI>(initialState);
  const { accessToken } = useContext(GlobalStateContext);
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data);
        }
        console.log(data);
        const groupData = data.data;
        setState({ error: null, data: groupData, loading: false });
      })
      .catch((err) => {
        setState({ data: null, error: err, loading: false });
      });
  }, []);

  return state;
}

export default useGet;
