import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <div className="nav-links">
        <div 
          onClick={() => navigate("/")}
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          首页
        </div>
        
        <div 
          onClick={() => navigate("/mine")}
          className={`nav-link ${location.pathname === "/mine" ? "active" : ""}`}
        >
          我的福利包
        </div>

        <div 
          onClick={() => navigate("/item")}
          className={`nav-link ${location.pathname === "/item" ? "active" : ""}`}
        >
          菜单
        </div>
        
        <div 
          onClick={() => navigate("/join")}
          className={`nav-link ${location.pathname === "/join" ? "active" : ""}`}
        >
          点我立即参与
        </div>
        <div 
          onClick={() => navigate("/property")}
          className={`nav-link ${location.pathname === "/property" ? "active" : ""}`}
        >
          我的资产
        </div>

        <div 
          onClick={() => navigate("/community")}
          className={`nav-link ${location.pathname === "/community" ? "active" : ""}`}
        >
          我的社区
        </div>
        <div 
          onClick={() => navigate("/details")}
          className={`nav-link ${location.pathname === "/details" ? "active" : ""}`}
        >
          收益明细
        </div>
        <div 
          onClick={() => navigate("/share")}
          className={`nav-link ${location.pathname === "/share" ? "active" : ""}`}
        >
          分享奖励
        </div>
        <div 
          onClick={() => navigate("/team")}
          className={`nav-link ${location.pathname === "/team" ? "active" : ""}`}
        >
          团队奖励
        </div>
        <div 
          onClick={() => navigate("/association")}
          className={`nav-link ${location.pathname === "/association" ? "active" : ""}`}
        >
          社群奖励
        </div>
        <div 
          onClick={() => navigate("/withdraw")}
          className={`nav-link ${location.pathname === "/withdraw" ? "active" : ""}`}
        >
          提现
        </div>
        <div 
          onClick={() => navigate("/convert")}
          className={`nav-link ${location.pathname === "/convert" ? "active" : ""}`}
        >
          兑换
        </div>
        <div 
          onClick={() => navigate("/language")}
          className={`nav-link ${location.pathname === "/language" ? "active" : ""}`}
        >
          选择语言
        </div>
      </div>
    </nav>
  );
} 