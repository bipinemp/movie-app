import { fetchData } from "@/apis/apicalls";
import { useEffect, useState } from "react";

export function useFetchData(url: string) {
  const [state, setState] = useState<FetchDataState>({
    data: null,
    loading: true,
    error: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));

        const data = await fetchData(url);

        setState({ data, loading: false, error: "" });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: "Something went wrong.",
        }));
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    };

    getData();
  }, [url]);

  return state;
}
