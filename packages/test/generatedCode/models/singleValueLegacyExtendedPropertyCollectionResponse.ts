import {SingleValueLegacyExtendedProperty} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SingleValueLegacyExtendedPropertyCollectionResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataNextLink property */
    odataNextLink?: string;
    /** The value property */
    value?: SingleValueLegacyExtendedProperty[];
}
