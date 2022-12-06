import {BodyType} from './bodyType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationItemBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The content property */
    content?: string;
    /** The contentType property */
    contentType?: BodyType;
    /** The OdataType property */
    odataType?: string;
}
