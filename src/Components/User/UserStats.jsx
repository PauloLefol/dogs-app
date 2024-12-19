import React from 'react';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem('token');
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <Head title="Stats" description="Your account stats." />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );

  return null;
};

export default UserStats;
