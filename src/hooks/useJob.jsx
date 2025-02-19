import { useEffect, useState } from "react";
import axios from "axios";

const useJob = (sort, search, min, max) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/jobs?sort=${sort}&search=${search}&min=${min}&max=${max}`
      )
      .then((res) => {
        setLoading(false);
        setJobs(res.data);
      });
  }, [sort, search, min, max]);

  return { loading, jobs };
};

export default useJob;
