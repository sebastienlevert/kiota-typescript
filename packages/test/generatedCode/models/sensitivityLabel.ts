import {ApplicationMode} from './applicationMode';
import {AutoLabeling, Entity, LabelActionBase, LabelPolicy} from './index';
import {SensitivityLabelTarget} from './sensitivityLabelTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SensitivityLabel extends Entity, Partial<Parsable> {
    /** The applicableTo property */
    applicableTo?: SensitivityLabelTarget;
    /** The applicationMode property */
    applicationMode?: ApplicationMode;
    /** The assignedPolicies property */
    assignedPolicies?: LabelPolicy[];
    /** The autoLabeling property */
    autoLabeling?: AutoLabeling;
    /** The description property */
    description?: string;
    /** The displayName property */
    displayName?: string;
    /** The isDefault property */
    isDefault?: boolean;
    /** The isEndpointProtectionEnabled property */
    isEndpointProtectionEnabled?: boolean;
    /** The labelActions property */
    labelActions?: LabelActionBase[];
    /** The name property */
    name?: string;
    /** The priority property */
    priority?: number;
    /** The sublabels property */
    sublabels?: SensitivityLabel[];
    /** The toolTip property */
    toolTip?: string;
}
