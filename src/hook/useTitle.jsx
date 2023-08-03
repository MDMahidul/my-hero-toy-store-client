import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - my hero`;
  }, [title]);
};

export default useTitle;
