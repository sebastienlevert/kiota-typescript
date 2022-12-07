import {Entity} from './index';
import {SensitivityLabelTarget} from './sensitivityLabelTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SensitivityPolicySettings extends Entity, Partial<Parsable> {
    /** The applicableTo property */
    applicableTo?: SensitivityLabelTarget;
    /** The downgradeSensitivityRequiresJustification property */
    downgradeSensitivityRequiresJustification?: boolean;
    /** The helpWebUrl property */
    helpWebUrl?: string;
    /** The isMandatory property */
    isMandatory?: boolean;
}
