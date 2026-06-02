import { jsPDF } from 'jspdf'
import { personalInfo, summary, skills, achievements } from '../lib/resumeData'
import { experiences } from '../data/experience'
import { projects } from '../data/projects'

export async function generateResumePDF() {
  const doc = new jsPDF('p', 'mm', 'a4')
  const pageWidth = 210
  const margin = 20
  const contentWidth = pageWidth - margin * 2
  let y = margin

  const accent = '#0071e3'

  const drawLine = (yPos, color = accent, width = contentWidth) => {
    doc.setDrawColor(color[0] || parseInt(color.slice(1, 3), 16), color[1] || parseInt(color.slice(3, 5), 16), color[2] || parseInt(color.slice(5, 7), 16))
    doc.setLineWidth(0.5)
    doc.line(margin, yPos, margin + width, yPos)
  }

  const checkPageBreak = (needed) => {
    if (y + needed > 280) {
      doc.addPage()
      y = margin
      return true
    }
    return false
  }

  // Name
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(26, 26, 46)
  doc.text(personalInfo.name, margin, y)
  y += 10

  // Role
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(0, 113, 227)
  doc.text(personalInfo.role, margin, y)
  y += 7

  // Contact line
  doc.setFontSize(8.5)
  doc.setTextColor(100, 116, 139)
  const contactLine = `${personalInfo.location}  |  ${personalInfo.email}  |  ${personalInfo.phone}  |  linkedin.com/in/muhammad-zeeshan-392479370`
  doc.text(contactLine, margin, y)
  y += 8

  drawLine(y)
  y += 6

  // Summary
  checkPageBreak(40)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(26, 26, 46)
  doc.text('Professional Summary', margin, y)
  y += 5
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(71, 85, 105)
  const summaryLines = doc.splitTextToSize(summary, contentWidth)
  doc.text(summaryLines, margin, y)
  y += summaryLines.length * 4.5 + 4

  // Skills
  checkPageBreak(50)
  drawLine(y)
  y += 5
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(26, 26, 46)
  doc.text('Technical Skills', margin, y)
  y += 6

  const skillCategories = {}
  skills.forEach(s => {
    if (!skillCategories[s.category]) skillCategories[s.category] = []
    skillCategories[s.category].push(s.name)
  })

  Object.entries(skillCategories).forEach(([cat, skillNames]) => {
    checkPageBreak(12)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(0, 113, 227)
    doc.text(cat + ':', margin, y)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(71, 85, 105)
    doc.text(skillNames.join(',  ·  '), margin + 25, y)
    y += 5
  })
  y += 2

  // Experience
  checkPageBreak(30)
  drawLine(y)
  y += 5
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(26, 26, 46)
  doc.text('Experience', margin, y)
  y += 7

  experiences.forEach(exp => {
    const needed = 20 + exp.highlights.length * 4.5
    checkPageBreak(needed)

    // Role
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(26, 26, 46)
    doc.text(exp.role, margin, y)

    // Company & Period
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 113, 227)
    const companyPeriod = `${exp.company}  |  ${exp.period}  |  ${exp.location}`
    doc.text(companyPeriod, margin, y + 4)

    // Highlights
    doc.setFontSize(8.5)
    doc.setTextColor(71, 85, 105)
    exp.highlights.forEach((h, i) => {
      const text = `• ${h}`
      const lines = doc.splitTextToSize(text, contentWidth - 5)
      doc.text(lines, margin + 3, y + 9 + i * 4.5)
    })
    y += 9 + exp.highlights.length * 4.5 + 4
  })

  // Projects
  checkPageBreak(20)
  drawLine(y)
  y += 5
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(26, 26, 46)
  doc.text('Key Projects', margin, y)
  y += 7

  projects.filter(p => p.featured).forEach(proj => {
    const needed = 15 + Math.ceil(proj.description.length / 80) * 4
    checkPageBreak(needed)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(26, 26, 46)
    doc.text(proj.title, margin, y)

    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 113, 227)
    doc.text(proj.tech.join(',  ·  '), margin, y + 4)

    doc.setFontSize(8.5)
    doc.setTextColor(71, 85, 105)
    const descLines = doc.splitTextToSize(proj.description, contentWidth)
    doc.text(descLines, margin, y + 8.5)
    y += 8.5 + descLines.length * 4 + 4
  })

  // Achievements
  checkPageBreak(15)
  y += 2
  drawLine(y)
  y += 5
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(26, 26, 46)
  doc.text('Achievements', margin, y)
  y += 6

  const achLine = achievements.map(a => `${a.value} ${a.label}`).join('  |  ')
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(0, 113, 227)
  doc.text(achLine, margin, y)
  y += 8

  // Footer
  doc.setFontSize(7.5)
  doc.setTextColor(148, 163, 184)
  doc.text('Generated from mehmetzeeshan.com · Muhammad Zeeshan', margin, 290)

  return doc
}
