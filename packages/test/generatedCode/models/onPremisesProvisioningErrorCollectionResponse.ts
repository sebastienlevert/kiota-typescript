import {BaseCollectionPaginationCountResponse, OnPremisesProvisioningError} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesProvisioningErrorCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OnPremisesProvisioningError[];
}
