import {Entity} from '../';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InformationProtectionPolicySetting extends Entity, Partial<Parsable> {
    /** The defaultLabelId property */
    defaultLabelId?: string;
    /** Exposes whether justification input is required on label downgrade. */
    isDowngradeJustificationRequired?: boolean;
    /** Exposes whether mandatory labeling is enabled. */
    isMandatory?: boolean;
    /** Exposes the more information URL that can be configured by the administrator. */
    moreInfoUrl?: string;
}
