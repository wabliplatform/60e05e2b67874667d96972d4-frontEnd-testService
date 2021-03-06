/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import City from '../model/City';

/**
* City service.
* @module api/CityApi
* @version 1.0.0
*/
export default class CityApi {

    /**
    * Constructs a new CityApi. 
    * @alias module:api/CityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createcity operation.
     * @callback module:api/CityApi~createcityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/City} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/City} city data to be created
     * @param {module:api/CityApi~createcityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/City}
     */
    createcity(city, callback) {
      let postBody = city;
      // verify the required parameter 'city' is set
      if (city === undefined || city === null) {
        throw new Error("Missing the required parameter 'city' when calling createcity");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = City;
      return this.apiClient.callApi(
        '/city', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletecity operation.
     * @callback module:api/CityApi~deletecityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} cityId the Id parameter
     * @param {module:api/CityApi~deletecityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletecity(cityId, callback) {
      let postBody = null;
      // verify the required parameter 'cityId' is set
      if (cityId === undefined || cityId === null) {
        throw new Error("Missing the required parameter 'cityId' when calling deletecity");
      }

      let pathParams = {
        'cityId': cityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/city/{cityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllcity operation.
     * @callback module:api/CityApi~getAllcityCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/City>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/CityApi~getAllcityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/City>}
     */
    getAllcity(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [City];
      return this.apiClient.callApi(
        '/city/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getcity operation.
     * @callback module:api/CityApi~getcityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/City} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} cityId the Id parameter
     * @param {module:api/CityApi~getcityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/City}
     */
    getcity(cityId, callback) {
      let postBody = null;
      // verify the required parameter 'cityId' is set
      if (cityId === undefined || cityId === null) {
        throw new Error("Missing the required parameter 'cityId' when calling getcity");
      }

      let pathParams = {
        'cityId': cityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = City;
      return this.apiClient.callApi(
        '/city/{cityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatecity operation.
     * @callback module:api/CityApi~updatecityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/City} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} cityId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/City} opts.city data to be updated
     * @param {module:api/CityApi~updatecityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/City}
     */
    updatecity(cityId, opts, callback) {
      opts = opts || {};
      let postBody = opts['city'];
      // verify the required parameter 'cityId' is set
      if (cityId === undefined || cityId === null) {
        throw new Error("Missing the required parameter 'cityId' when calling updatecity");
      }

      let pathParams = {
        'cityId': cityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = City;
      return this.apiClient.callApi(
        '/city/{cityId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
