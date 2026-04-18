// ========= CelestiaX Module ========= //
// Name: Wink VIP
// Version: V1.0.0
// ==================================== //

let obj = JSON.parse($response.body);

obj.data = {
    "active_sub_type": 2,
    "account_type": 1,
    "sub_type_name": "Sử dụng vĩnh viễn",
    "active_sub_order_id": "7069961436604422668",
    "trial_period_invalid_time": "",
    "current_order_invalid_time": "32662173600000", // Năm 2999
    "active_order_id": "7069961436340181123",
    "limit_type": 0,
    "active_sub_type_name": "Sửa đổi bởi CelestiaX",
    "use_vip": true,
    "have_valid_contract": true,
    "derive_type_name": "Premium Member",
    "derive_type": 1,
    "in_trial_period": false,
    "is_vip": true,
    "membership": {
        "id": "4",
        "display_name": "Wink VIP",
        "level": 1,
        "level_name": "Premium"
    },
    "active_promotion_status_list": [2],
    "sub_type": 2,
    "account_id": "1230010086",
    "invalid_time": "32662195199000",
    "valid_time": "1546992000000",
    "active_product_id": "0",
    "active_promotion_status": 2,
    "show_renew_flag": true
};

$done({ body: JSON.stringify(obj) });
