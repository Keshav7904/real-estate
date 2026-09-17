'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Plus, Edit2, Eye, Trash2, TrendingUp, Users, Calendar, Search, Filter, X,
  BarChart3, Bell, LandPlot, MapPinned,
} from 'lucide-react';
import { properties, totalAvailablePlots, corridors } from '@/lib/data';
import { site } from '@/lib/config';
import BrandSelect from '@/components/BrandSelect';

const RECENT_LEADS = [
  { name: 'Priya Rajan', mobile: '+91 98401 23456', layout: 'VK Emerald Acres', budget: '₹40 L – ₹75 L', status: 'Hot', when: 'Today, 10:30 AM' },
  { name: 'Karthik Subramaniam', mobile: '+91 99402 34567', layout: 'VK Gold Coast', budget: '₹1.5 Cr +', status: 'New', when: 'Today, 09:15 AM' },
  { name: 'Srinivasan Iyer', mobile: '+91 98403 45678', layout: 'VK Green Meadows', budget: 'Under ₹40 L', status: 'Contacted', when: 'Yesterday' },
  { name: 'Anitha Krishnan', mobile: '+91 99404 56789', layout: 'VK Riverside Park', budget: '₹40 L – ₹75 L', status: 'Closed', when: '2 days ago' },
];

const LEAD_COLORS: Record<string, string> = {
  New: '#3b82f6',
  Contacted: 'var(--status-hold)',
  Hot: '#B4453C',
  Closed: 'var(--status-available)',
};

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'inventory', label: 'Plot Inventory', icon: LandPlot },
  { id: 'leads', label: 'Enquiries', icon: Users },
  { id: 'visits', label: 'Site Visits', icon: Calendar },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState('dashboard');
  const [drawer, setDrawer] = useState(false);
  const [draft, setDraft] = useState({ use: 'Residential', status: 'Ready to Register', corridor: corridors[0].name });

  const totalPlots = properties.reduce((sum, p) => sum + (p.land?.totalPlots ?? 0), 0);

  const stats = [
    { label: 'Active layouts', value: properties.length, icon: MapPinned, color: 'var(--brand-gold)' },
    { label: 'Plots available', value: `${totalAvailablePlots} / ${totalPlots}`, icon: LandPlot, color: 'var(--status-available)' },
    { label: 'Open enquiries', value: '1,240', icon: Users, color: '#3b82f6' },
    { label: 'Site visits this week', value: '37', icon: Calendar, color: 'var(--status-hold)' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--surface-raised)', paddingTop: 'var(--nav-height)' }}>
      <aside
        className="hidden-mobile"
        style={{ width: 236, background: 'var(--brand-deep)', color: 'white', display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'fixed', top: 'var(--nav-height)', bottom: 0, zIndex: 10 }}
      >
        <div style={{ padding: 22, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: 'var(--brand-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
            {site.name} · Admin
          </div>
        </div>

        <nav style={{ padding: '20px 0', flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '12px 22px', width: '100%', textAlign: 'left',
                  background: active ? 'rgba(255,255,255,0.09)' : 'transparent', border: 'none', cursor: 'pointer',
                  color: active ? 'var(--brand-gold)' : 'rgba(255,255,255,0.7)',
                  borderLeft: `3px solid ${active ? 'var(--brand-gold)' : 'transparent'}`,
                  fontSize: 14, fontWeight: 500,
                }}
              >
                <item.icon size={17} /> {item.label}
              </button>
            );
          })}
        </nav>

        <div style={{ padding: 22, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14 }}>
            <Eye size={15} /> View website
          </Link>
        </div>
      </aside>

      <div className="admin-main" style={{ flex: 1, marginLeft: 236, padding: 'clamp(20px, 3vw, 32px)', minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, gap: 16, flexWrap: 'wrap' }}>
          <div>
            <h1 className="font-display" style={{ fontSize: 26, color: 'var(--brand-deep)', margin: '0 0 4px' }}>Good morning</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
              {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })} · {totalAvailablePlots} plots open across {properties.length} layouts
            </p>
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <button
              aria-label="Notifications"
              style={{ width: 40, height: 40, borderRadius: '50%', background: 'white', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative' }}
            >
              <Bell size={19} color="var(--brand-deep)" />
              <span style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: '50%', background: '#B4453C' }} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', padding: '6px 16px 6px 6px', borderRadius: 99, border: '1px solid var(--border-subtle)' }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--brand-deep)', color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>A</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--brand-deep)' }}>Admin</span>
            </div>
          </div>
        </div>

        {tab === 'dashboard' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 20, marginBottom: 28 }}>
              {stats.map((s) => (
                <div key={s.label} className="stat-card" style={{ borderLeftColor: s.color }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--surface-raised)', color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <s.icon size={22} />
                  </div>
                  <div style={{ fontSize: 25, fontWeight: 800, color: 'var(--brand-deep)', marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--text-secondary)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
              <div className="card card-static" style={{ overflow: 'hidden', gridColumn: 'span 2', minWidth: 0 }}>
                <div style={{ padding: 18, borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: 16.5, color: 'var(--brand-deep)', fontFamily: "var(--font-sans)" }}>Recent enquiries</h3>
                  <button className="btn btn-secondary btn-sm" onClick={() => setTab('leads')}>View all</button>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table className="data-table" style={{ minWidth: 560 }}>
                    <thead>
                      <tr>
                        <th>Buyer</th>
                        <th>Layout</th>
                        <th>Budget</th>
                        <th>Status</th>
                        <th>When</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RECENT_LEADS.map((lead) => (
                        <tr key={lead.mobile}>
                          <td>
                            <div style={{ fontWeight: 600, color: 'var(--brand-deep)' }}>{lead.name}</div>
                            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{lead.mobile}</div>
                          </td>
                          <td>{lead.layout}</td>
                          <td style={{ color: 'var(--text-secondary)' }}>{lead.budget}</td>
                          <td>
                            <span style={{ padding: '4px 10px', borderRadius: 99, fontSize: 12, fontWeight: 600, background: `${LEAD_COLORS[lead.status]}1f`, color: LEAD_COLORS[lead.status] }}>
                              {lead.status}
                            </span>
                          </td>
                          <td style={{ color: 'var(--text-muted)' }}>{lead.when}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card card-static">
                <div style={{ padding: 18, borderBottom: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: 16.5, color: 'var(--brand-deep)', fontFamily: "var(--font-sans)" }}>Selling fastest</h3>
                </div>
                <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[...properties]
                    .sort((a, b) => (a.land?.availablePlots ?? 0) / (a.land?.totalPlots ?? 1) - (b.land?.availablePlots ?? 0) / (b.land?.totalPlots ?? 1))
                    .slice(0, 4)
                    .map((p) => {
                      const sold = (p.land?.totalPlots ?? 0) - (p.land?.availablePlots ?? 0);
                      const pct = p.land ? Math.round((sold / p.land.totalPlots) * 100) : 0;
                      return (
                        <div key={p.id} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                          <div style={{ width: 52, height: 42, borderRadius: 'var(--radius-sm)', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                            <Image src={p.photos[0]} alt="" fill style={{ objectFit: 'cover' }} sizes="52px" />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--brand-deep)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</div>
                            <div style={{ height: 5, background: 'var(--surface-raised)', borderRadius: 3, marginTop: 5, overflow: 'hidden' }}>
                              <div style={{ width: `${pct}%`, height: '100%', background: 'var(--gradient-gold)' }} />
                            </div>
                          </div>
                          <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--brand-gold-dark)', flexShrink: 0 }}>{pct}%</div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'inventory' && (
          <div className="card card-static" style={{ padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, flexWrap: 'wrap', gap: 14 }}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <div className="search-bar" style={{ padding: 3, borderRadius: 'var(--radius-md)', width: 280, boxShadow: 'none', border: '1px solid var(--border-medium)' }}>
                  <Search size={17} color="var(--text-muted)" style={{ marginLeft: 10 }} />
                  <input type="text" className="search-bar-input" placeholder="Search layouts…" style={{ padding: '8px 12px' }} />
                </div>
                <button className="btn btn-secondary"><Filter size={15} /> Filter</button>
              </div>
              <button className="btn btn-primary" onClick={() => setDrawer(true)}><Plus size={17} /> Add layout</button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className="data-table" style={{ minWidth: 800 }}>
                <thead>
                  <tr>
                    <th>Layout</th>
                    <th>Use</th>
                    <th>Approvals</th>
                    <th>Rate</th>
                    <th>Available</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                          <div style={{ width: 46, height: 46, borderRadius: 'var(--radius-sm)', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                            <Image src={p.photos[0]} alt="" fill style={{ objectFit: 'cover' }} sizes="46px" />
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, color: 'var(--brand-deep)' }}>{p.title}</div>
                            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p.location}</div>
                          </div>
                        </div>
                      </td>
                      <td>{p.land?.use}</td>
                      <td>
                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                          {p.land?.approvals.map((a) => (
                            <span key={a} className="chip chip-gold" style={{ fontSize: 10.5, padding: '2px 8px' }}>{a}</span>
                          ))}
                        </div>
                      </td>
                      <td style={{ fontWeight: 600 }}>₹{p.land?.pricePerSqft.toLocaleString('en-IN')}</td>
                      <td style={{ fontWeight: 600, color: (p.land?.availablePlots ?? 0) < 10 ? 'var(--status-hold)' : 'var(--status-available)' }}>
                        {p.land?.availablePlots} / {p.land?.totalPlots}
                      </td>
                      <td>
                        <span style={{
                          padding: '4px 9px', borderRadius: 5, fontSize: 12, fontWeight: 500,
                          background: p.status === 'Ready to Register' ? 'rgba(18,140,90,0.12)' : 'rgba(199,123,22,0.12)',
                          color: p.status === 'Ready to Register' ? 'var(--status-available)' : 'var(--status-hold)',
                        }}>
                          {p.status}
                        </span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: 7 }}>
                          <button aria-label="Edit" style={{ width: 30, height: 30, borderRadius: 5, background: 'var(--surface-raised)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                            <Edit2 size={13} />
                          </button>
                          <Link href={`/plots/${p.slug}`} target="_blank" aria-label="View" style={{ width: 30, height: 30, borderRadius: 5, background: 'var(--surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-deep)' }}>
                            <Eye size={13} />
                          </Link>
                          <button aria-label="Delete" style={{ width: 30, height: 30, borderRadius: 5, background: 'rgba(180,69,60,0.1)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--status-sold)' }}>
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(tab === 'leads' || tab === 'visits') && (
          <div className="card card-static" style={{ padding: '72px 24px', textAlign: 'center' }}>
            <TrendingUp size={40} color="var(--border-medium)" style={{ margin: '0 auto 18px' }} />
            <h3 style={{ fontSize: 19, color: 'var(--brand-deep)', marginBottom: 10 }}>
              {tab === 'leads' ? 'Enquiry pipeline' : 'Site visit calendar'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 400, marginInline: 'auto' }}>
              This module connects to the CRM. Until it is wired up, the dashboard tab shows the latest enquiries.
            </p>
          </div>
        )}
      </div>

      {drawer && (
        <div className="modal-overlay" style={{ justifyContent: 'flex-end', padding: 0 }} onClick={() => setDrawer(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ height: '100%', maxHeight: '100vh', borderRadius: 0, width: 580, maxWidth: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ padding: 22, borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: 19, color: 'var(--brand-deep)', fontFamily: "var(--font-sans)" }}>Add a plot layout</h2>
              <button onClick={() => setDrawer(false)} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <X size={22} />
              </button>
            </div>

            <div style={{ padding: 22, overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="form-group">
                <label className="form-label" htmlFor="a-name">Layout name</label>
                <input id="a-name" type="text" className="form-input" placeholder="e.g. VK Emerald Acres" />
              </div>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <div className="form-group" style={{ flex: '1 1 150px' }}>
                  <label className="form-label" htmlFor="a-use">Land use</label>
                  <BrandSelect
                    id="a-use"
                    value={draft.use}
                    onChange={(v) => setDraft({ ...draft, use: v })}
                    options={['Residential', 'Commercial', 'Farmland', 'Industrial'].map((v) => ({ value: v, label: v }))}
                  />
                </div>
                <div className="form-group" style={{ flex: '1 1 150px' }}>
                  <label className="form-label" htmlFor="a-status">Status</label>
                  <BrandSelect
                    id="a-status"
                    value={draft.status}
                    onChange={(v) => setDraft({ ...draft, status: v })}
                    options={['Ready to Register', 'Development in Progress', 'New Launch'].map((v) => ({ value: v, label: v }))}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="a-corridor">Corridor</label>
                <BrandSelect
                  id="a-corridor"
                  value={draft.corridor}
                  onChange={(v) => setDraft({ ...draft, corridor: v })}
                  options={corridors.map((c) => ({ value: c.name, label: c.name }))}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="a-approval">Approval numbers</label>
                <input id="a-approval" type="text" className="form-input" placeholder="DTCP/CHN/0000/2025 · TN/29/Layout/0000/2025" />
              </div>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <div className="form-group" style={{ flex: '1 1 130px' }}>
                  <label className="form-label" htmlFor="a-rate">Rate (₹/sq.ft)</label>
                  <input id="a-rate" type="number" className="form-input" placeholder="4000" />
                </div>
                <div className="form-group" style={{ flex: '1 1 130px' }}>
                  <label className="form-label" htmlFor="a-total">Total plots</label>
                  <input id="a-total" type="number" className="form-input" placeholder="96" />
                </div>
                <div className="form-group" style={{ flex: '1 1 130px' }}>
                  <label className="form-label" htmlFor="a-open">Available</label>
                  <input id="a-open" type="number" className="form-input" placeholder="23" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="a-desc">Description</label>
                <textarea id="a-desc" className="form-input" rows={4} placeholder="What makes this layout worth buying into…" />
              </div>

              <div style={{ padding: 20, border: '2px dashed var(--border-medium)', borderRadius: 'var(--radius-md)', textAlign: 'center', background: 'var(--surface-raised)' }}>
                <Plus size={28} color="var(--border-medium)" style={{ margin: '0 auto 10px' }} />
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--brand-deep)' }}>Upload layout plan &amp; site photos</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Drag and drop, or click to select files</div>
              </div>
            </div>

            <div style={{ padding: 22, borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <button className="btn btn-secondary" onClick={() => setDrawer(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={() => setDrawer(false)}>Publish layout</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .admin-main { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}
