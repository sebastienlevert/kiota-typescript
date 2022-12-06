import {BaseCollectionPaginationCountResponse, ProvisioningStep} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningStepCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ProvisioningStep[];
}
