import {ExchangeIdFormat} from '../../models/exchangeIdFormat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TranslateExchangeIdsPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The InputIds property */
    inputIds?: string[];
    /** The SourceIdType property */
    sourceIdType?: ExchangeIdFormat;
    /** The TargetIdType property */
    targetIdType?: ExchangeIdFormat;
}
