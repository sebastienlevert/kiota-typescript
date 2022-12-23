import {SynchronizationSecret} from './synchronizationSecret';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationSecretKeyStringValuePair extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The key property */
    key?: SynchronizationSecret;
    /** The value of the secret. */
    value?: string;
}