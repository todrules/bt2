/**
 * bt-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Address } from './address';


export interface Employee {
    firstName: string;

    lastName: string;

    phoneNumber?: string;

    realm?: string;

    username?: string;

    email: string;

    emailVerified?: boolean;

    id?: number;

    companyId?: number;

    address?: Address;

}
