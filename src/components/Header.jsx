
function Header() {
  return (
    <div className="a-container">
        <div className="a-nav-logo">
            <a href="/">
                <img src="	https://www.appverticals.com/_next/image?url=%2Fnext%2Fappverticals-logo.webp&w=384&q=75"/>
            </a>
        </div>
        <div className="a-nav-links"> 
            <ul className="font-nova">
                <li>HOME</li>
                <li className="a-services">
                    <a>SERVICES</a>
                    <div className="a-services-inner">
                        <ul>
                            <li>MOBILE APPLICATION DEVELOPMENT</li>
                            <li>IPHONE APP DEVELOPMENT</li>
                            <li>WEB APP DEVELOPMENT</li>
                            <li>ANDROID APP DEVELOPMENT</li>
                        </ul>
                    </div>
                    </li>
                <li className="a-solutions">
                   <a>SOLUTIONS</a>
                    <div className="a-solutions-inner py-3">
                        <div className="flex justify-center align-center flex-3" >
                            <img width="60%" height="70%" src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fmenu-dropdown%2Fservices%2Findustry%2Ftech-img.webp&w=384&q=75" alt="image"/>
                        </div>
                        <div className="flex-3">
                            <h3 className="py-4 px-2">Consulting</h3>
                            <div>
                                <ul className="flex flex-col align-start  a-border-left font-nova">
                                    <li className="p-2" >FULL CYCLE PRODUCT DEVELOPMENT</li>
                                    <li  className="p-2">PRODUCT MANAGEMENT</li>
                                    <li className="p-2">MVP</li>
                                    <li className="p-2">UI/UX</li>
                                    <li className="p-2">STARTUPS</li>
                                    <li className="p-2">ENTERPRISE</li>
                                    <li className="p-2">HIRE DEDICATED DELEOPER</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-2">
                            <h3 className="py-4 px-2">Industries</h3>
                            <div>
                                <ul className="flex align-start flex-col text-left a-border-left font-nova">
                                    <li className="p-2">ON-DEMAND</li>
                                    <li className="p-2">HEALTH CARE</li>
                                    <li className="p-2">SOCIAL NETWORKING</li>
                                    <li className="p-2">TRAVEL</li>
                                    <li className="p-2">RESTURANT</li>
                                    <li className="p-2">COMMERCE</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-2 font-1">
                            <h3 className="py-4 px-2 a-border-left">&nbsp;</h3>
                            <ul className="flex flex-col align-start font-nova ">
                                <li className="p-2 font-1">SAAS</li>
                                <li className="p-2">SPORTS</li>
                                <li className="p-2">FINANCE</li>
                                <li className="p-2">REAL ESTATE</li>
                                <li className="p-2">LMS</li>
                                <li className="p-2">WELLNESS</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>TECHNOLOGIES</li>
                <li>LOCATION</li>
                <li>CASE STUDIES</li>
                <li>INSIGHTS</li> 
            </ul>
        </div>
        <div className="a-nav-button font-5">
            <button className="color-transition-button ">Get Estimate</button></div>
        </div>
  )
}

export default Header