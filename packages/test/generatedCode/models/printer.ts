import {createPrintConnectorFromDiscriminatorValue} from './createPrintConnectorFromDiscriminatorValue';
import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {PrintConnector, PrinterBase, PrinterShare, PrintTaskTrigger} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Printer extends PrinterBase implements Parsable {
    /** The acceptingJobs property */
    private _acceptingJobs?: boolean | undefined;
    /** The connectors that are associated with the printer. */
    private _connectors?: PrintConnector[] | undefined;
    /** True if the printer has a physical device for printing. Read-only. */
    private _hasPhysicalDevice?: boolean | undefined;
    /** True if the printer is shared; false otherwise. Read-only. */
    private _isShared?: boolean | undefined;
    /** The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only. */
    private _lastSeenDateTime?: Date | undefined;
    /** The DateTimeOffset when the printer was registered. Read-only. */
    private _registeredDateTime?: Date | undefined;
    /** The share property */
    private _share?: PrinterShare | undefined;
    /** The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable. */
    private _shares?: PrinterShare[] | undefined;
    /** A list of task triggers that are associated with the printer. */
    private _taskTriggers?: PrintTaskTrigger[] | undefined;
    /**
     * Gets the acceptingJobs property value. The acceptingJobs property
     * @returns a boolean
     */
    public get acceptingJobs() {
        return this._acceptingJobs;
    };
    /**
     * Sets the acceptingJobs property value. The acceptingJobs property
     * @param value Value to set for the acceptingJobs property.
     */
    public set acceptingJobs(value: boolean | undefined) {
        this._acceptingJobs = value;
    };
    /**
     * Gets the connectors property value. The connectors that are associated with the printer.
     * @returns a printConnector
     */
    public get connectors() {
        return this._connectors;
    };
    /**
     * Sets the connectors property value. The connectors that are associated with the printer.
     * @param value Value to set for the connectors property.
     */
    public set connectors(value: PrintConnector[] | undefined) {
        this._connectors = value;
    };
    /**
     * Instantiates a new Printer and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "acceptingJobs": n => { this.acceptingJobs = n.getBooleanValue(); },
            "connectors": n => { this.connectors = n.getCollectionOfObjectValues<PrintConnector>(createPrintConnectorFromDiscriminatorValue); },
            "hasPhysicalDevice": n => { this.hasPhysicalDevice = n.getBooleanValue(); },
            "isShared": n => { this.isShared = n.getBooleanValue(); },
            "lastSeenDateTime": n => { this.lastSeenDateTime = n.getDateValue(); },
            "registeredDateTime": n => { this.registeredDateTime = n.getDateValue(); },
            "share": n => { this.share = n.getObjectValue<PrinterShare>(createPrinterShareFromDiscriminatorValue); },
            "shares": n => { this.shares = n.getCollectionOfObjectValues<PrinterShare>(createPrinterShareFromDiscriminatorValue); },
            "taskTriggers": n => { this.taskTriggers = n.getCollectionOfObjectValues<PrintTaskTrigger>(createPrintTaskTriggerFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the hasPhysicalDevice property value. True if the printer has a physical device for printing. Read-only.
     * @returns a boolean
     */
    public get hasPhysicalDevice() {
        return this._hasPhysicalDevice;
    };
    /**
     * Sets the hasPhysicalDevice property value. True if the printer has a physical device for printing. Read-only.
     * @param value Value to set for the hasPhysicalDevice property.
     */
    public set hasPhysicalDevice(value: boolean | undefined) {
        this._hasPhysicalDevice = value;
    };
    /**
     * Gets the isShared property value. True if the printer is shared; false otherwise. Read-only.
     * @returns a boolean
     */
    public get isShared() {
        return this._isShared;
    };
    /**
     * Sets the isShared property value. True if the printer is shared; false otherwise. Read-only.
     * @param value Value to set for the isShared property.
     */
    public set isShared(value: boolean | undefined) {
        this._isShared = value;
    };
    /**
     * Gets the lastSeenDateTime property value. The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.
     * @returns a Date
     */
    public get lastSeenDateTime() {
        return this._lastSeenDateTime;
    };
    /**
     * Sets the lastSeenDateTime property value. The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.
     * @param value Value to set for the lastSeenDateTime property.
     */
    public set lastSeenDateTime(value: Date | undefined) {
        this._lastSeenDateTime = value;
    };
    /**
     * Gets the registeredDateTime property value. The DateTimeOffset when the printer was registered. Read-only.
     * @returns a Date
     */
    public get registeredDateTime() {
        return this._registeredDateTime;
    };
    /**
     * Sets the registeredDateTime property value. The DateTimeOffset when the printer was registered. Read-only.
     * @param value Value to set for the registeredDateTime property.
     */
    public set registeredDateTime(value: Date | undefined) {
        this._registeredDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("acceptingJobs", this.acceptingJobs);
        writer.writeCollectionOfObjectValues<PrintConnector>("connectors", this.connectors);
        writer.writeBooleanValue("hasPhysicalDevice", this.hasPhysicalDevice);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeDateValue("lastSeenDateTime", this.lastSeenDateTime);
        writer.writeDateValue("registeredDateTime", this.registeredDateTime);
        writer.writeObjectValue<PrinterShare>("share", this.share);
        writer.writeCollectionOfObjectValues<PrinterShare>("shares", this.shares);
        writer.writeCollectionOfObjectValues<PrintTaskTrigger>("taskTriggers", this.taskTriggers);
    };
    /**
     * Gets the share property value. The share property
     * @returns a printerShare
     */
    public get share() {
        return this._share;
    };
    /**
     * Sets the share property value. The share property
     * @param value Value to set for the share property.
     */
    public set share(value: PrinterShare | undefined) {
        this._share = value;
    };
    /**
     * Gets the shares property value. The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
     * @returns a printerShare
     */
    public get shares() {
        return this._shares;
    };
    /**
     * Sets the shares property value. The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
     * @param value Value to set for the shares property.
     */
    public set shares(value: PrinterShare[] | undefined) {
        this._shares = value;
    };
    /**
     * Gets the taskTriggers property value. A list of task triggers that are associated with the printer.
     * @returns a printTaskTrigger
     */
    public get taskTriggers() {
        return this._taskTriggers;
    };
    /**
     * Sets the taskTriggers property value. A list of task triggers that are associated with the printer.
     * @param value Value to set for the taskTriggers property.
     */
    public set taskTriggers(value: PrintTaskTrigger[] | undefined) {
        this._taskTriggers = value;
    };
}
