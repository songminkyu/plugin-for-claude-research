#!/usr/bin/env node

/**
 * Verify domain-research plugin installation integrity
 * Run after install.js to confirm all skills are properly installed
 */

const fs = require('fs');
const path = require('path');

const PLUGIN_NAME = 'domain-research';
const SKILL_NAMES = ['domain-research', 'self-learning'];

function getCliHome(cli) {
  const home = process.env.HOME || process.env.USERPROFILE;
  return path.join(home, `.${cli}`);
}

function detectInstalledCLIs() {
  const clis = [];
  const home = process.env.HOME || process.env.USERPROFILE;
  for (const cli of ['claude', 'codex']) {
    if (fs.existsSync(path.join(home, `.${cli}`, 'skills'))) {
      clis.push(cli);
    }
  }
  return clis;
}

function verifyYamlFrontmatter(skillMdPath) {
  const content = fs.readFileSync(skillMdPath, 'utf8');
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return { valid: false, reason: 'No YAML frontmatter' };
  const yaml = match[1];
  if (!yaml.includes('name:')) return { valid: false, reason: 'Missing name field' };
  if (!yaml.includes('description:')) return { valid: false, reason: 'Missing description field' };
  return { valid: true };
}

function verify() {
  console.log(`\n🔍 Verifying ${PLUGIN_NAME} plugin installation...\n`);

  let allPassed = true;
  const clis = detectInstalledCLIs();

  if (clis.length === 0) {
    console.log('⚠️  No installed CLIs found (claude or codex)');
    console.log('   Run install.js first\n');
    process.exit(1);
  }

  for (const cli of clis) {
    console.log(`📍 Checking ${cli}...\n`);
    const cliHome = getCliHome(cli);

    for (const skillName of SKILL_NAMES) {
      const skillDir = path.join(cliHome, 'skills', skillName);
      const skillMd = path.join(skillDir, 'SKILL.md');

      process.stdout.write(`   ${skillName}:\n`);

      // Check directory exists
      if (!fs.existsSync(skillDir)) {
        console.log(`     ❌ Directory missing: ${skillDir}`);
        allPassed = false;
        continue;
      }
      console.log(`     ✅ Directory exists`);

      // Check SKILL.md exists
      if (!fs.existsSync(skillMd)) {
        console.log(`     ❌ SKILL.md missing`);
        allPassed = false;
        continue;
      }
      console.log(`     ✅ SKILL.md found`);

      // Validate YAML frontmatter
      const validation = verifyYamlFrontmatter(skillMd);
      if (!validation.valid) {
        console.log(`     ❌ YAML frontmatter invalid: ${validation.reason}`);
        allPassed = false;
      } else {
        console.log(`     ✅ YAML frontmatter valid`);
      }
    }
    console.log('');
  }

  if (allPassed) {
    console.log('✅ All checks passed! Plugin is correctly installed.\n');
  } else {
    console.log('❌ Some checks failed. Run install.js to reinstall.\n');
    process.exit(1);
  }
}

verify();
