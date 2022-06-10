import React, { useState, useEffect } from "react";
import { Input, Button } from "reactstrap";
import mapIcon from "../../assets/images/icons/map-pin.svg";
import { LineArrow } from "../SvgComponents";
import { ClickAwayListener } from "../../util";
import cx from "classnames";
import { useHistory } from "react-router";

export default function SearchDestination(props) {
  const { data = [] } = props;
  const [dropList, setDropList] = useState(false);
  const [destination, setDestination] = useState("");
  const [keyword, setKeyword] = useState("");
  const [destinationId, setDestinationId] = useState(0);
  const history = useHistory();

  function closeDrop() {
    setDropList(false);
  }
  function openDrop() {
    setDropList(true);
  }

  function handleDestinnation(e) {
    setDestination(e.target.value);
    if (e.target.value == "") setDestinationId(0);
  }

  function goToSearch() {
    if (destinationId == 0 && keyword == "") return;
    if (keyword == "") return;

    if (destinationId == 0) {
      history.push("/s/" + keyword + "/-1");
    }
    else
      history.push("/s/" + keyword + "/" + destinationId);
  }
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const lData = [...listData];
    const data1 = {};
    data1["id"] = "-1";
    data1["name"] = "All Destination";
    lData[0] = data1;

    for (var i = 0; i < data.length; i++) {
      var tempData = {};
      tempData["id"] = data[i].id;
      tempData["name"] = data[i].name;
      lData[i + 1] = tempData;
    }

    setListData(lData);
  }, [data]);

  const renderData = listData?.filter(({ name }) =>
    name.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <div className="search-destination">
      <div className="wrapper">
        <div className="inp-wrapper">
          <div className="inps">
            <ClickAwayListener onClickAway={closeDrop}>
              <div className="inputs" onClick={openDrop}>
                <div className="des">
                  <img src={mapIcon} color="#e4e4e3" alt="" />
                  <Input
                    placeholder="Find destination"
                    value={destination}
                    // onChange={handleDestinnation}
                  />
                  {/* {listData && (
                    <div className={cx("drop-options")}>
                      <div className="drop-holder">
                        <div className="drop-wrapper">
                          {listData?.map(({ name, id }, index) => (
                            <div key={"des" + index}>
                              <button
                                onClick={() => {
                                  closeDrop();
                                  setDestination(name);
                                  setDestinationId(id);
                                }}
                              >
                                {name}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )} */}
                </div>

                {dropList && (
                  <div className={cx("drop-options")}>
                    <div className="drop-holder">
                      <div className="drop-wrapper">
                        {listData?.map(({ name, id }, index) => (
                          <div key={"des" + index} >
                            <button
                              onClick={() => {
                                setDestination(name);
                                setDestinationId(id);
                                closeDrop();
                              }}
                            >
                              {name}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ClickAwayListener>
            <div className="">
              <Input
                className="keywords"
                placeholder="What are you in the mood for?"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </div>
          <div className="btn-wrapper">
            <Button color="primary" className="arrow" onClick={goToSearch}>
              <span>
                <LineArrow />
                Discover
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
