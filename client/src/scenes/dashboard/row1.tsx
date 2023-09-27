import DashboardBox from '@/components/Dashboard'
import { useGetKpisQuery } from '@/state/api';


const Row1 = () => {
  const {data} = useGetKpisQuery();
  console.log("data:", data)
  return (
    <>
        <DashboardBox gridArea="a"></DashboardBox>
        <DashboardBox gridArea="b"></DashboardBox>
        <DashboardBox gridArea="c"></DashboardBox>
    </>
      )
}
export default Row1;