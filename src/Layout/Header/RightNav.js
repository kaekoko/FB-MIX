import React, { useContext, useState } from "react";
import Link from "next/link";
import {
  RiFullscreenExitLine,
  RiFullscreenFill,
  RiGlobalLine,
  RiMoonLine,
  RiRefreshLine,
  RiSearchLine,
} from "react-icons/ri";
import { Col } from "reactstrap";
import useOutsideDropdown from "../../Utils/Hooks/CustomHooks/useOutsideDropdown";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import Language from "./Language";
import NotificationBox from "./NotificationBox";
import ProfileNav from "./ProfileNav";
import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";
import QuickLinks from "./QuickLinks";
import SettingContext from "@/Helper/SettingContext";
import Btn from "@/Elements/Buttons/Btn";
import AccountContext from "@/Helper/AccountContext";
import { useQuery } from "@tanstack/react-query";
import request from "@/Utils/AxiosUtils";
import { selfData } from "@/Utils/AxiosUtils/API";

const RightNav = ({ setMode, setOpenSearchBar }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { accountData } = useContext(AccountContext);
  const { t } = useTranslation(i18Lang, "common");
  const [isOrderCreate] = usePermissionCheck(["create"], "order");
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideDropdown();
  const { settingObj } = useContext(SettingContext);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const { data, refetch, isFetching } = useQuery({
    queryKey: ["profile"],
    queryFn: () => request({ url: selfData }).then((res) => res?.data),
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const toggleFullScreen = () => {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      setIsFullScreen((prev) => (prev = true));
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      setIsFullScreen((prev) => (prev = false));
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };

  return (
    <Col className="nav-right pull-right right-header p-0">
      <div className="header-btns d-none d-lg-flex"></div>
      <ul className="nav-menus" ref={ref}>
        {/* <li>
          <div className="full-screen-box">
            {isFullScreen ? (
              <RiFullscreenExitLine
                role="button"
                className="header-fullscreen"
                onClick={toggleFullScreen}
              />
            ) : (
              <RiFullscreenFill
                role="button"
                className="header-fullscreen"
                onClick={toggleFullScreen}
              />
            )}
          </div>
        </li> */}
        {/* <Language
          isComponentVisible={isComponentVisible}
          setIsComponentVisible={setIsComponentVisible}
        /> */}
        {/* <NotificationBox
          isComponentVisible={isComponentVisible}
          setIsComponentVisible={setIsComponentVisible}
        /> */}
        {/* <li>
          <div className="mode">
            <RiMoonLine
              className="ri-moon-line"
              onClick={() => setMode((prev) => !prev)}
            />
          </div>
        </li> */}
        <Btn
          loading={isFetching}
          onClick={() => {
            !isFetching && refetch();
          }}
          className="btn btn-outline fw-bold"
        >
          <span>
            {Intl.NumberFormat("en-US", {
              currency: "MMK",
              style: "currency",
            }).format(data?.data?.balance || accountData?.balance || 0)}
          </span>

          {!isFetching ? (
            <RiRefreshLine size={20} className="ms-3 text-black" />
          ) : (
            <></>
          )}
        </Btn>
        <ProfileNav
          isComponentVisible={isComponentVisible}
          setIsComponentVisible={setIsComponentVisible}
        />
      </ul>
    </Col>
  );
};

export default RightNav;
