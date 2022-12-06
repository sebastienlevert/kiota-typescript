import {BaseCollectionPaginationCountResponse, InferenceClassificationOverride} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InferenceClassificationOverrideCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: InferenceClassificationOverride[];
}
