# TempApi.WeatherApi

All URIs are relative to *http://83.212.100.226:3002/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createweather**](WeatherApi.md#createweather) | **POST** /weather | Creates the data
[**deleteweather**](WeatherApi.md#deleteweather) | **DELETE** /weather/{weatherId} | Delete the element
[**getAllweather**](WeatherApi.md#getAllweather) | **GET** /weather/getAll | Get all the data
[**getweather**](WeatherApi.md#getweather) | **GET** /weather/{weatherId} | Get the element
[**updateweather**](WeatherApi.md#updateweather) | **PUT** /weather/{weatherId} | Updates the element



## createweather

> Weather createweather(weather)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WeatherApi();
let weather = new TempApi.Weather(); // Weather | data to be created
apiInstance.createweather(weather, (error, data, response) => {
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
 **weather** | [**Weather**](Weather.md)| data to be created | 

### Return type

[**Weather**](Weather.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteweather

> deleteweather(weatherId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WeatherApi();
let weatherId = "weatherId_example"; // String | the Id parameter
apiInstance.deleteweather(weatherId, (error, data, response) => {
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
 **weatherId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllweather

> [Weather] getAllweather()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WeatherApi();
apiInstance.getAllweather((error, data, response) => {
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

[**[Weather]**](Weather.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getweather

> Weather getweather(weatherId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WeatherApi();
let weatherId = "weatherId_example"; // String | the Id parameter
apiInstance.getweather(weatherId, (error, data, response) => {
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
 **weatherId** | **String**| the Id parameter | 

### Return type

[**Weather**](Weather.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateweather

> Weather updateweather(weatherId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WeatherApi();
let weatherId = "weatherId_example"; // String | the Id parameter
let opts = {
  'weather': new TempApi.Weather() // Weather | data to be updated
};
apiInstance.updateweather(weatherId, opts, (error, data, response) => {
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
 **weatherId** | **String**| the Id parameter | 
 **weather** | [**Weather**](Weather.md)| data to be updated | [optional] 

### Return type

[**Weather**](Weather.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

