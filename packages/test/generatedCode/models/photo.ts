import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Photo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Camera manufacturer. Read-only. */
    cameraMake?: string;
    /** Camera model. Read-only. */
    cameraModel?: string;
    /** The denominator for the exposure time fraction from the camera. Read-only. */
    exposureDenominator?: number;
    /** The numerator for the exposure time fraction from the camera. Read-only. */
    exposureNumerator?: number;
    /** The F-stop value from the camera. Read-only. */
    fNumber?: number;
    /** The focal length from the camera. Read-only. */
    focalLength?: number;
    /** The ISO value from the camera. Read-only. */
    iso?: number;
    /** The orientation value from the camera. Writable on OneDrive Personal. */
    orientation?: number;
    /** The date and time the photo was taken in UTC time. Read-only. */
    takenDateTime?: Date;
}
