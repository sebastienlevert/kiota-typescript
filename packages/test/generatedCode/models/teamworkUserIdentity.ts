import {Identity} from './index';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkUserIdentity extends Identity, Partial<Parsable> {
    /** The userIdentityType property */
    userIdentityType?: TeamworkUserIdentityType;
}
