# TempApi.CityApi

All URIs are relative to *http://83.212.100.226:3002/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createcity**](CityApi.md#createcity) | **POST** /city | Creates the data
[**deletecity**](CityApi.md#deletecity) | **DELETE** /city/{cityId} | Delete the element
[**getAllcity**](CityApi.md#getAllcity) | **GET** /city/getAll | Get all the data
[**getcity**](CityApi.md#getcity) | **GET** /city/{cityId} | Get the element
[**updatecity**](CityApi.md#updatecity) | **PUT** /city/{cityId} | Updates the element



## createcity

> City createcity(city)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CityApi();
let city = new TempApi.City(); // City | data to be created
apiInstance.createcity(city, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | [**City**](City.md)| data to be created | 

### Return type

[**City**](City.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletecity

> deletecity(cityId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CityApi();
let cityId = "cityId_example"; // String | the Id parameter
apiInstance.deletecity(cityId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllcity

> [City] getAllcity()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CityApi();
apiInstance.getAllcity((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[City]**](City.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getcity

> City getcity(cityId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CityApi();
let cityId = "cityId_example"; // String | the Id parameter
apiInstance.getcity(cityId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **String**| the Id parameter | 

### Return type

[**City**](City.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatecity

> City updatecity(cityId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CityApi();
let cityId = "cityId_example"; // String | the Id parameter
let opts = {
  'city': new TempApi.City() // City | data to be updated
};
apiInstance.updatecity(cityId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **String**| the Id parameter | 
 **city** | [**City**](City.md)| data to be updated | [optional] 

### Return type

[**City**](City.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

