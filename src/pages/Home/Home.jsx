import "./home.css";

import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Charts from '../../components/Charts/Charts';
import WidgetSm from '../../components/widgets/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgets/widgetLg/WidgetLg';


import {userData} from '../../dummyData';

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
