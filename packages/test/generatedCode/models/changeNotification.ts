import {ChangeType} from './changeType';
import {ChangeNotificationEncryptedContent, ResourceData} from './index';
import {LifecycleEventType} from './lifecycleEventType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChangeNotification extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The changeType property */
    changeType?: ChangeType;
    /** Value of the clientState property sent in the subscription request (if any). The maximum length is 255 characters. The client can check whether the change notification came from the service by comparing the values of the clientState property. The value of the clientState property sent with the subscription is compared with the value of the clientState property received with each change notification. Optional. */
    clientState?: string;
    /** (Preview) Encrypted content attached with the change notification. Only provided if encryptionCertificate and includeResourceData were defined during the subscription request and if the resource supports it. Optional. */
    encryptedContent?: ChangeNotificationEncryptedContent;
    /** Unique ID for the notification. Optional. */
    id?: string;
    /** The type of lifecycle notification if the current notification is a lifecycle notification. Optional. Supported values are missed, subscriptionRemoved, reauthorizationRequired. Optional. */
    lifecycleEvent?: LifecycleEventType;
    /** The OdataType property */
    odataType?: string;
    /** The URI of the resource that emitted the change notification relative to https://graph.microsoft.com. Required. */
    resource?: string;
    /** The content of this property depends on the type of resource being subscribed to. Optional. */
    resourceData?: ResourceData;
    /** The expiration time for the subscription. Required. */
    subscriptionExpirationDateTime?: Date;
    /** The unique identifier of the subscription that generated the notification.Required. */
    subscriptionId?: string;
    /** The unique identifier of the tenant from which the change notification originated. Required. */
    tenantId?: string;
}
