import {IdentityUserFlowAttributeInputType} from './identityUserFlowAttributeInputType';
import {Entity, IdentityUserFlowAttribute, UserAttributeValuesItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttributeAssignment extends Entity, Partial<Parsable> {
    /** The display name of the identityUserFlowAttribute within a user flow. */
    displayName?: string;
    /** Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value. */
    isOptional?: boolean;
    /** Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address. */
    requiresVerification?: boolean;
    /** The user attribute that you want to add to your user flow. */
    userAttribute?: IdentityUserFlowAttribute;
    /** The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect. */
    userAttributeValues?: UserAttributeValuesItem[];
    /** The userInputType property */
    userInputType?: IdentityUserFlowAttributeInputType;
}
