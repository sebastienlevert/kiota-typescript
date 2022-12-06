import {BaseCollectionPaginationCountResponse, WorkforceIntegration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkforceIntegrationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkforceIntegration[];
}
