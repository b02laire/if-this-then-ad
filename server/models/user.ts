/**
    Copyright 2022 Google LLC
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        https://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

export interface User {
    id?: string;
    profileId: number;
    displayName?: string;
    givenName?: string;
    familyName?: string;
    gender?: string;
    email: string;
    verified?: boolean;
    profilePhoto?: string;
    locale?: string;
    token: Token
}

export interface Token {
    access: string, 
    expiry: Date,
    refresh?: string, 
    provider?: string,
    scope?: Array<string>
    type?:string
}