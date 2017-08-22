// Copyright (c) 2016, Togo Business Solutions and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Unallocated Salary Journals"] = {
	"filters": [
		{
                        "fieldname": "from_date",
                        "label": __("From Date"),
                        "fieldtype": "Date",
                        'reqd': 1,
                        "default": frappe.datetime.add_days(frappe.datetime.nowdate(), -30)
                },
                {
                        "fieldname": "to_date",
                        "label": __("To Date"),
                        "fieldtype": "Date",
                        'reqd': 1,
                        "default": frappe.datetime.nowdate()
                }
	]
}
