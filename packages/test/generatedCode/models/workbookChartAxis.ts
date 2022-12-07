import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookChartAxisFormatFromDiscriminatorValue} from './createWorkbookChartAxisFormatFromDiscriminatorValue';
import {createWorkbookChartAxisTitleFromDiscriminatorValue} from './createWorkbookChartAxisTitleFromDiscriminatorValue';
import {createWorkbookChartGridlinesFromDiscriminatorValue} from './createWorkbookChartGridlinesFromDiscriminatorValue';
import {Entity, Json, WorkbookChartAxisFormat, WorkbookChartAxisTitle, WorkbookChartGridlines} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartAxis extends Entity implements Parsable {
    /** The format property */
    private _format?: WorkbookChartAxisFormat | undefined;
    /** The majorGridlines property */
    private _majorGridlines?: WorkbookChartGridlines | undefined;
    /** The majorUnit property */
    private _majorUnit?: Json | undefined;
    /** The maximum property */
    private _maximum?: Json | undefined;
    /** The minimum property */
    private _minimum?: Json | undefined;
    /** The minorGridlines property */
    private _minorGridlines?: WorkbookChartGridlines | undefined;
    /** The minorUnit property */
    private _minorUnit?: Json | undefined;
    /** The title property */
    private _title?: WorkbookChartAxisTitle | undefined;
    /**
     * Instantiates a new workbookChartAxis and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. The format property
     * @returns a workbookChartAxisFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. The format property
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartAxisFormat | undefined) {
        this._format = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartAxisFormat>(createWorkbookChartAxisFormatFromDiscriminatorValue); },
            "majorGridlines": n => { this.majorGridlines = n.getObjectValue<WorkbookChartGridlines>(createWorkbookChartGridlinesFromDiscriminatorValue); },
            "majorUnit": n => { this.majorUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "maximum": n => { this.maximum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "minimum": n => { this.minimum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "minorGridlines": n => { this.minorGridlines = n.getObjectValue<WorkbookChartGridlines>(createWorkbookChartGridlinesFromDiscriminatorValue); },
            "minorUnit": n => { this.minorUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "title": n => { this.title = n.getObjectValue<WorkbookChartAxisTitle>(createWorkbookChartAxisTitleFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the majorGridlines property value. The majorGridlines property
     * @returns a workbookChartGridlines
     */
    public get majorGridlines() {
        return this._majorGridlines;
    };
    /**
     * Sets the majorGridlines property value. The majorGridlines property
     * @param value Value to set for the majorGridlines property.
     */
    public set majorGridlines(value: WorkbookChartGridlines | undefined) {
        this._majorGridlines = value;
    };
    /**
     * Gets the majorUnit property value. The majorUnit property
     * @returns a Json
     */
    public get majorUnit() {
        return this._majorUnit;
    };
    /**
     * Sets the majorUnit property value. The majorUnit property
     * @param value Value to set for the majorUnit property.
     */
    public set majorUnit(value: Json | undefined) {
        this._majorUnit = value;
    };
    /**
     * Gets the maximum property value. The maximum property
     * @returns a Json
     */
    public get maximum() {
        return this._maximum;
    };
    /**
     * Sets the maximum property value. The maximum property
     * @param value Value to set for the maximum property.
     */
    public set maximum(value: Json | undefined) {
        this._maximum = value;
    };
    /**
     * Gets the minimum property value. The minimum property
     * @returns a Json
     */
    public get minimum() {
        return this._minimum;
    };
    /**
     * Sets the minimum property value. The minimum property
     * @param value Value to set for the minimum property.
     */
    public set minimum(value: Json | undefined) {
        this._minimum = value;
    };
    /**
     * Gets the minorGridlines property value. The minorGridlines property
     * @returns a workbookChartGridlines
     */
    public get minorGridlines() {
        return this._minorGridlines;
    };
    /**
     * Sets the minorGridlines property value. The minorGridlines property
     * @param value Value to set for the minorGridlines property.
     */
    public set minorGridlines(value: WorkbookChartGridlines | undefined) {
        this._minorGridlines = value;
    };
    /**
     * Gets the minorUnit property value. The minorUnit property
     * @returns a Json
     */
    public get minorUnit() {
        return this._minorUnit;
    };
    /**
     * Sets the minorUnit property value. The minorUnit property
     * @param value Value to set for the minorUnit property.
     */
    public set minorUnit(value: Json | undefined) {
        this._minorUnit = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartAxisFormat>("format", this.format);
        writer.writeObjectValue<WorkbookChartGridlines>("majorGridlines", this.majorGridlines);
        writer.writeObjectValue<Json>("majorUnit", this.majorUnit);
        writer.writeObjectValue<Json>("maximum", this.maximum);
        writer.writeObjectValue<Json>("minimum", this.minimum);
        writer.writeObjectValue<WorkbookChartGridlines>("minorGridlines", this.minorGridlines);
        writer.writeObjectValue<Json>("minorUnit", this.minorUnit);
        writer.writeObjectValue<WorkbookChartAxisTitle>("title", this.title);
    };
    /**
     * Gets the title property value. The title property
     * @returns a workbookChartAxisTitle
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    public set title(value: WorkbookChartAxisTitle | undefined) {
        this._title = value;
    };
}
