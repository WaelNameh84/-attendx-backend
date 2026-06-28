import{c as D}from"./index-WoZlejCM.js";const O=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],U=D("briefcase",O);const I=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],N=D("share-2",I);function s(a){return a.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function f(a,n){if(a<=0)return"—";const i=Math.round(a*60),t=Math.floor(i/60),r=i%60;return n?t>0&&r>0?`${t}س ${r}د`:t>0?`${t}س`:`${r}د`:t>0&&r>0?`${t}h ${r}m`:t>0?`${t}h`:`${r}m`}function z(a,n){return n?{present:"حاضر",late:"متأخر",absent:"غائب",on_leave:"إجازة",early_leave:"خروج مبكر"}[a]??a:{present:"Present",late:"Late",absent:"Absent",on_leave:"On Leave",early_leave:"Early Leave"}[a]??a}function H(a){return a==="absent"?"#dc2626":a==="late"||a==="early_leave"?"#d97706":a==="on_leave"?"#2563eb":"#16a34a"}function S(a){const{isArabic:n,appName:i,summary:t,records:r,payroll:d,payrollError:b,from:u,to:h,employeeName:$,appLogo:v}=a,w=n?"rtl":"ltr",e=(o,l)=>n?o:l,m=n?"right":"left",c=n?"left":"right",_=v?`<img src="${v}" style="width:48px;height:48px;object-fit:contain;border-radius:8px;" />`:`<div style="width:48px;height:48px;border-radius:8px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff;">${(i||"A").charAt(0).toUpperCase()}</div>`,L=[{label:e("أيام الحضور","Present Days"),value:t.presentDays,color:"#16a34a"},{label:e("أيام الغياب","Absent Days"),value:t.absentDays,color:"#dc2626"},{label:e("ساعات العمل","Work Hours"),value:f(t.normalHours,n),color:"#4f46e5"},{label:e("ساعات إضافية","Overtime"),value:f(t.overtime,n),color:"#d97706"}].map(o=>`
    <div style="flex:1;min-width:110px;background:#fff;border-radius:10px;padding:14px 10px;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,0.1);border-top:3px solid ${o.color};">
      <div style="font-size:22px;font-weight:900;color:${o.color};margin-bottom:4px;">${o.value}</div>
      <div style="font-size:11px;color:#6b7280;">${o.label}</div>
    </div>
  `).join(""),A=[[e("من تاريخ","From"),u],[e("إلى تاريخ","To"),h],[e("أيام العمل المتوقعة","Working Days"),t.workingDays],[e("الساعات المتوقعة","Expected Hours"),f(t.expectedHours,n)],[e("أيام الحضور","Present Days"),t.presentDays],[e("أيام الغياب","Absent Days"),t.absentDays],[e("أيام الإجازة","Leave Days"),t.leaveDays],[e("أيام التأخر","Late Days"),t.lateDays??0],[e("صافي ساعات العمل","Net Work Hours"),f(t.normalHours,n)],[e("ساعات الإضافي","Overtime Hours"),f(t.overtime,n)]].map((o,l)=>`
    <tr style="background:${l%2===0?"#f9fafb":"#fff"};">
      <td style="padding:7px 14px;color:#6b7280;font-size:12px;">${o[0]}</td>
      <td style="padding:7px 14px;font-weight:700;font-size:12px;text-align:${c};">${o[1]}</td>
    </tr>`).join("");let x="";if(b)x=`
      <div style="margin-top:24px;background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;padding:16px 20px;">
        <div style="font-weight:700;color:#c2410c;font-size:13px;margin-bottom:4px;">
          ⚠️ ${e("تنبيه: قسم الراتب","Notice: Salary Section")}
        </div>
        <div style="font-size:12px;color:#92400e;">${b}</div>
      </div>`;else if(!d)x=`
      <div style="margin-top:24px;background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;padding:16px 20px;">
        <div style="font-size:12px;color:#0369a1;">
          ℹ️ ${e("لم يتم ربط بيانات الراتب بهذا التقرير. لعرض الراتب، اختر موظفاً محدداً وتأكد من إعداد راتبه.","Payroll data was not linked to this report. To include salary, select a specific employee with a configured salary.")}
        </div>
      </div>`;else{const l=[[e("الراتب الأساسي","Base Salary"),`${s(d.dailyRate)} / ${e("يوم","day")} · ${s(d.hourlyRate)} / ${e("ساعة","hr")}`,s(d.baseSalary),"#111827"],[e("مكافأة الإضافي","Overtime Bonus"),`${d.totalOvertimeHours} ${e("ساعة","h")} × ${s(d.hourlyRate)} × 1.5`,`+${s(d.overtimeBonus)}`,"#16a34a"],[e("خصم التأخر","Late Penalty"),`${d.totalLateMinutes} ${e("دقيقة","min")}`,`−${s(d.latePenalty)}`,"#dc2626"],[e("خصم الإجازة غير المدفوعة","Unpaid Leave Deduction"),"",`−${s(d.unpaidLeaveDeduction)}`,"#dc2626"],[e("خصم الغياب","Absence Deduction"),"",`−${s(d.absentDeduction??0)}`,"#dc2626"]].map((p,R)=>`
      <tr style="background:${R%2===0?"#f9fafb":"#fff"};">
        <td style="padding:9px 14px;font-size:12px;font-weight:700;">${p[0]}</td>
        <td style="padding:9px 14px;font-size:11px;color:#6b7280;">${p[1]}</td>
        <td style="padding:9px 14px;font-size:13px;font-weight:800;color:${p[3]};text-align:${c};">${p[2]}</td>
      </tr>`).join(""),y=d.netSalary>=d.baseSalary?"#dcfce7":"#fef3c7",g=d.netSalary>=d.baseSalary?"#16a34a":"#d97706";x=`
      <div style="margin-top:24px;page-break-inside:avoid;">
        <div style="background:#4f46e5;color:#fff;padding:11px 16px;border-radius:10px 10px 0 0;font-weight:800;font-size:13px;display:flex;justify-content:space-between;align-items:center;">
          <span>💰 ${e("تفاصيل الراتب","Salary Breakdown")}</span>
          <span style="font-weight:500;font-size:11px;opacity:.85;">${d.period}</span>
        </div>
        <table style="width:100%;border-collapse:collapse;background:#fff;">
          <thead>
            <tr style="background:#ede9fe;">
              <th style="padding:8px 14px;font-size:11px;color:#4f46e5;text-align:${m};font-weight:700;">${e("البند","Item")}</th>
              <th style="padding:8px 14px;font-size:11px;color:#4f46e5;text-align:${m};font-weight:700;">${e("التفاصيل","Details")}</th>
              <th style="padding:8px 14px;font-size:11px;color:#4f46e5;text-align:${c};font-weight:700;">${e("المبلغ","Amount")}</th>
            </tr>
          </thead>
          <tbody>${l}</tbody>
          <tfoot>
            <tr style="background:${y};">
              <td colspan="2" style="padding:12px 14px;font-size:14px;font-weight:900;">${e("✅ صافي الراتب","✅ Net Salary")}</td>
              <td style="padding:12px 14px;font-size:20px;font-weight:900;color:${g};text-align:${c};">${s(d.netSalary)}</td>
            </tr>
          </tfoot>
        </table>
      </div>`}const k=a.isAdmin?[e("التاريخ","Date"),e("الموظف","Employee"),e("دخول","In"),e("خروج","Out"),e("العمل","Work"),e("إضافي","OT"),e("الحالة","Status")]:[e("التاريخ","Date"),e("دخول","In"),e("خروج","Out"),e("العمل","Work"),e("إضافي","OT"),e("الحالة","Status")],j=r.map((o,l)=>{const y=H(o.status),g=a.isAdmin?[o.date,o.employee??"—",o.checkIn,o.checkOut,o.normalHours,o.overtime,`<span style="color:${y};font-weight:700;">${z(o.status,n)}</span>`]:[o.date,o.checkIn,o.checkOut,o.normalHours,o.overtime,`<span style="color:${y};font-weight:700;">${z(o.status,n)}</span>`];return`<tr style="background:${l%2===0?"#f9fafb":"#fff"};">
      ${g.map(p=>`<td style="padding:6px 10px;font-size:11px;border-bottom:1px solid #f0f0f0;">${p}</td>`).join("")}
    </tr>`}).join("");return`<!DOCTYPE html>
<html lang="${n?"ar":"en"}" dir="${w}">
<head>
<meta charset="UTF-8" />
<title>${i} — ${e("تقرير الحضور","Attendance Report")}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: ${n?"'Noto Sans Arabic','Tahoma','Arial',sans-serif":"'Inter','Arial',sans-serif"};
    background: #f3f4f6;
    color: #111827;
    direction: ${w};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .page { max-width: 900px; margin: 0 auto; padding: 24px; }
  .no-print { display: block; }
  @media print {
    body { background: #fff; }
    .page { padding: 0; max-width: 100%; }
    .no-print { display: none !important; }
    table { page-break-inside: auto; }
    tr { page-break-inside: avoid; page-break-after: auto; }
  }
  table { border-collapse: collapse; width: 100%; }
  th { font-weight: 700; }
</style>
</head>
<body>
<div class="page">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;border-radius:12px;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:16px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:14px;">
      ${_}
      <div>
        <div style="font-size:20px;font-weight:900;">${i}</div>
        <div style="font-size:11px;opacity:.8;margin-top:2px;">${e("تقرير الحضور والرواتب","Attendance &amp; Payroll Report")}</div>
      </div>
    </div>
    <div style="text-align:${c};">
      ${$?`<div style="font-size:15px;font-weight:800;margin-bottom:4px;">${$}</div>`:""}
      <div style="font-size:12px;opacity:.85;">${u} → ${h}</div>
      <div style="font-size:10px;opacity:.65;margin-top:3px;">${e("تاريخ الإصدار","Generated")}: ${new Date().toLocaleString()}</div>
    </div>
  </div>

  <!-- KPI Cards -->
  <div style="display:flex;gap:12px;margin-bottom:20px;flex-wrap:wrap;">${L}</div>

  <!-- Summary -->
  <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08);margin-bottom:20px;">
    <div style="background:#1e293b;color:#fff;padding:10px 16px;font-weight:800;font-size:13px;">
      📊 ${e("ملخص الفترة","Period Summary")}
    </div>
    <table>${A}</table>
  </div>

  <!-- Payroll -->
  ${x}

  <!-- Attendance Log -->
  <div style="margin-top:24px;">
    <div style="background:#111827;color:#fff;padding:11px 16px;border-radius:10px 10px 0 0;font-weight:800;font-size:13px;display:flex;justify-content:space-between;align-items:center;">
      <span>📋 ${e("سجل الحضور التفصيلي","Detailed Attendance Log")}</span>
      <span style="font-weight:400;font-size:11px;opacity:.7;">${r.length} ${e("سجل","records")}</span>
    </div>
    <div style="overflow:auto;background:#fff;border-radius:0 0 10px 10px;box-shadow:0 1px 3px rgba(0,0,0,.08);">
      <table>
        <thead>
          <tr style="background:#f3f4f6;">
            ${k.map(o=>`<th style="padding:9px 10px;font-size:11px;text-align:${m};border-bottom:2px solid #e5e7eb;white-space:nowrap;">${o}</th>`).join("")}
          </tr>
        </thead>
        <tbody>${j||`<tr><td colspan="${k.length}" style="text-align:center;padding:20px;color:#9ca3af;font-size:12px;">${e("لا توجد سجلات","No records")}</td></tr>`}</tbody>
      </table>
    </div>
  </div>

  <!-- Footer -->
  <div style="margin-top:24px;padding-top:12px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;font-size:10px;color:#9ca3af;">
    <span>${i} · ${e("نظام إدارة الحضور","Attendance Management System")}</span>
    <span>${e("سري — للاستخدام الداخلي فقط","Confidential — Internal Use Only")}</span>
  </div>

</div>
</body>
</html>`}function P(a){const n=document.getElementById("__pdf_print_frame__");n&&n.remove();const i=document.createElement("iframe");i.id="__pdf_print_frame__",i.style.cssText="position:fixed;top:-10000px;left:-10000px;width:1px;height:1px;border:none;visibility:hidden;",document.body.appendChild(i);const t=i.contentDocument||i.contentWindow?.document;if(!t){i.remove();return}t.open(),t.write(a),t.close();const r=()=>{try{i.contentWindow?.focus(),i.contentWindow?.print()}catch{}setTimeout(()=>i.remove(),6e4)};t.readyState==="complete"?setTimeout(r,500):i.onload=()=>setTimeout(r,500)}function B(a){const n=S(a),i=new Blob([n],{type:"text/html;charset=utf-8"}),t=URL.createObjectURL(i),r=document.createElement("a");r.href=t,r.target="_blank",r.rel="noopener noreferrer",document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(t),1e4)}function E(a){const n=S(a);P(n)}function W(a,n){const i=`mailto:?subject=${encodeURIComponent(a)}&body=${encodeURIComponent(n)}`,t=document.createElement("a");t.href=i,document.body.appendChild(t),t.click(),document.body.removeChild(t)}export{U as B,N as S,W as a,B as e,E as s};
