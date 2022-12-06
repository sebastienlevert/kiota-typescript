import {DirectoryObject, PolicyBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface StsPolicy extends Partial<Parsable>, PolicyBase {
    /** The appliesTo property */
    appliesTo?: DirectoryObject[];
    /** A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required. */
    definition?: string[];
    /** If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false. */
    isOrganizationDefault?: boolean;
}
