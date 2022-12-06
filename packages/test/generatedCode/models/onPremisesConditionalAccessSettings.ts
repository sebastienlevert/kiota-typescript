import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesConditionalAccessSettings extends Entity, Partial<Parsable> {
    /** Indicates if on premises conditional access is enabled for this organization */
    enabled?: boolean;
    /** User groups that will be exempt by on premises conditional access. All users in these groups will be exempt from the conditional access policy. */
    excludedGroups?: string[];
    /** User groups that will be targeted by on premises conditional access. All users in these groups will be required to have mobile device managed and compliant for mail access. */
    includedGroups?: string[];
    /** Override the default access rule when allowing a device to ensure access is granted. */
    overrideDefaultRule?: boolean;
}
