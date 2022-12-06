import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MessageSecurityState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The connectingIP property */
    connectingIP?: string;
    /** The deliveryAction property */
    deliveryAction?: string;
    /** The deliveryLocation property */
    deliveryLocation?: string;
    /** The directionality property */
    directionality?: string;
    /** The internetMessageId property */
    internetMessageId?: string;
    /** The messageFingerprint property */
    messageFingerprint?: string;
    /** The messageReceivedDateTime property */
    messageReceivedDateTime?: Date;
    /** The messageSubject property */
    messageSubject?: string;
    /** The networkMessageId property */
    networkMessageId?: string;
    /** The OdataType property */
    odataType?: string;
}
