import useFindLoaderMatch from 'app/utils/hooks/useFindLoaderMatch';

function useUser() {
  const loader = useFindLoaderMatch('root');
  if (!loader || !loader.data) return undefined;
  return loader.data.profile;
}

export default useUser;
