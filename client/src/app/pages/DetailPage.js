import { BaseLayout }  from '../layouts'
import {Detail} from '../components/forDetail'
import Usetext from '../hooks/Usetext'
import  UseFetchDetail from '../hooks/UseFetchDetail';
import UseFetchCast from '../hooks/UseFetchCast';

const DetailPage = () => {
  const params = Usetext();
  let paramType = params.get('type');
  let paramId = params.get('id');


  let dataDetail = UseFetchDetail(`/${paramType}/${paramId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
  let dataCast = UseFetchCast(`/${paramType}/${paramId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
  return (
    <BaseLayout>
      <Detail data={dataDetail} casts={dataCast && dataCast.slice(0,10)}/>
   </BaseLayout>
  )
}

export default DetailPage;
