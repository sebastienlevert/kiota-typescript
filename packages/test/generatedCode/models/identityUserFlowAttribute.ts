import {IdentityUserFlowAttributeDataType} from './identityUserFlowAttributeDataType';
import {IdentityUserFlowAttributeType} from './identityUserFlowAttributeType';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttribute extends Entity, Partial<Parsable> {
    /** The dataType property */
    dataType?: IdentityUserFlowAttributeDataType;
    /** The description of the user flow attribute that's shown to the user at the time of sign-up. */
    description?: string;
    /** The display name of the user flow attribute. */
    displayName?: string;
    /** The userFlowAttributeType property */
    userFlowAttributeType?: IdentityUserFlowAttributeType;
}
