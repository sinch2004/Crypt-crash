// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FIR {
    enum status {
        Pending,
        Approved,
        Rejected
    }

    struct USER_FIR {
        uint id;
        address user;
        string name;
        string email;
        string user_address;
        uint pincode;
        string grievance_title;
        string grievance_description;
        string police_station_name;
        string date_time;
        status currentStatus;
        string status_date_time;
    }

    USER_FIR[] public USER_FIR_LIST;
    uint public id;
    uint public check_id;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Only owner can access this function");
        _;
    }

    function addFIR(string memory name, string memory email, string calldata user_address, uint pincode, string memory grievance_title, string calldata grievance_description, string memory police_station_name, string memory date_time) public {
        USER_FIR memory user_fir;
        user_fir.id = id++;
        user_fir.user = msg.sender;
        user_fir.name = name;
        user_fir.email = email;
        user_fir.user_address = user_address;
        user_fir.pincode = pincode;
        user_fir.grievance_title = grievance_title;
        user_fir.grievance_description = grievance_description;
        user_fir.police_station_name = police_station_name;
        user_fir.date_time = date_time;
        USER_FIR_LIST.push(user_fir);
    }

    function userFIR(uint _id) public view returns(USER_FIR memory) {
        require(USER_FIR_LIST[_id].user == msg.sender, "You are not the owner of FIR");
        return USER_FIR_LIST[_id];
    }

    function checkFIR(status _currentStatus, string calldata _status_date_time) public onlyOwner {
        USER_FIR_LIST[check_id].currentStatus = _currentStatus;
        USER_FIR_LIST[check_id].status_date_time = _status_date_time;
        check_id++;
    }
}