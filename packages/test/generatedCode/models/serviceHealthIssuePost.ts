import {ItemBody} from './index';
import {PostType} from './postType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHealthIssuePost extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The published time of the post. */
    createdDateTime?: Date;
    /** The content of the service issue post. The supported value for the contentType property is html. */
    description?: ItemBody;
    /** The OdataType property */
    odataType?: string;
    /** The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue. */
    postType?: PostType;
}
