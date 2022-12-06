import {Entity} from './index';
import {UserFlowType} from './userFlowType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlow extends Entity, Partial<Parsable> {
    /** The userFlowType property */
    userFlowType?: UserFlowType;
    /** The userFlowTypeVersion property */
    userFlowTypeVersion?: number;
}
